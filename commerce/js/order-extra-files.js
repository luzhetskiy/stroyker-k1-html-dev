(function () {
    const MAX_FILES = 5;
    const fieldStates = new Map();

    function supportsFileListEditing(input) {
        try {
            if (typeof DataTransfer === 'undefined') return false;
            const transfer = new DataTransfer();
            input.files = transfer.files;
            return transfer.items !== undefined;
        } catch (error) {
            return false;
        }
    }

    function formatFileSize(bytes) {
        if (bytes < 1024 * 1024) {
            return `${Math.max(1, Math.round(bytes / 1024))} КБ`;
        }
        return `${(bytes / (1024 * 1024)).toFixed(1)} МБ`;
    }

    function fileKey(file) {
        return `${file.name}:${file.size}:${file.lastModified}`;
    }

    function setInputFiles(input, files) {
        const transfer = new DataTransfer();
        files.forEach(function (file) {
            transfer.items.add(file);
        });
        input.files = transfer.files;
    }

    function clearElement(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    function createFileItem(file, index, removeFile) {
        const item = document.createElement('div');
        item.className = 'order-extra-file__item';

        const icon = document.createElement('span');
        icon.className = 'order-extra-file__pdf-icon';
        icon.textContent = 'PDF';

        const details = document.createElement('span');
        details.className = 'order-extra-file__details';

        const name = document.createElement('span');
        name.className = 'order-extra-file__name';
        name.textContent = file.name;

        const size = document.createElement('span');
        size.className = 'order-extra-file__size';
        size.textContent = formatFileSize(file.size);

        const remove = document.createElement('button');
        remove.className = 'order-extra-file__remove';
        remove.type = 'button';
        remove.innerHTML = '&times;';
        remove.setAttribute('aria-label', `Удалить файл ${file.name}`);
        remove.addEventListener('click', function () {
            removeFile(index);
        });

        details.appendChild(name);
        details.appendChild(size);
        item.appendChild(icon);
        item.appendChild(details);
        item.appendChild(remove);
        return item;
    }

    function createLimitWarning() {
        const warning = document.createElement('div');
        warning.className = 'order-extra-file__warning';
        warning.textContent = 'Можно выбрать не более 5 файлов. Удалите лишние.';
        return warning;
    }

    function renderComponent(component, state) {
        clearElement(component.list);
        state.files.forEach(function (file, index) {
            component.list.appendChild(createFileItem(file, index, function (removedIndex) {
                state.files = state.files.filter(function (_, fileIndex) {
                    return fileIndex !== removedIndex;
                });
                syncState(state);
            }));
        });
        if (state.files.length > MAX_FILES) {
            component.list.appendChild(createLimitWarning());
        }
        component.container.classList.toggle('order-extra-file--filled', state.files.length > 0);
    }

    function syncState(state) {
        state.components = state.components.filter(function (component) {
            return component.container.isConnected;
        });
        state.components.forEach(function (component) {
            setInputFiles(component.input, state.files);
            renderComponent(component, state);
        });
    }

    function initializeFileField(container) {
        if (container.dataset.orderExtraFileInitialized) return;

        const input = container.querySelector('input[type="file"]');
        const trigger = container.querySelector('[data-order-extra-file-trigger]');
        const list = container.querySelector('[data-order-extra-file-list]');
        if (!input || !trigger || !list || !supportsFileListEditing(input)) return;

        container.dataset.orderExtraFileInitialized = 'true';
        container.classList.add('order-extra-file--enhanced');

        const state = fieldStates.get(input.name) || {
            files: Array.from(input.files),
            components: [],
        };
        const component = {container: container, input: input, list: list};
        state.components.push(component);
        fieldStates.set(input.name, state);

        trigger.addEventListener('click', function () {
            input.click();
        });
        input.addEventListener('change', function () {
            const existingFiles = new Set(state.files.map(fileKey));
            Array.from(input.files).forEach(function (file) {
                const key = fileKey(file);
                if (!existingFiles.has(key)) {
                    state.files.push(file);
                    existingFiles.add(key);
                }
            });
            syncState(state);
        });
        syncState(state);
    }

    function initializeFileFields() {
        document.querySelectorAll('[data-order-extra-file]').forEach(initializeFileField);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeFileFields);
    } else {
        initializeFileFields();
    }
})();
