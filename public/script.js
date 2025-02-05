document.addEventListener("DOMContentLoaded", () => {
    const dropZone = document.querySelector(".drop-zone");
    
    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
        dropZone.classList.add("drag-over");
    });

    dropZone.addEventListener("dragleave", () => {
        dropZone.classList.remove("drag-over");
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        dropZone.classList.remove("drag-over");
        const files = event.dataTransfer.files;
        handleFiles(files);
    });

    dropZone.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.multiple = true;
        input.addEventListener("change", (event) => {
            handleFiles(event.target.files);
        });
        input.click();
    });

    function handleFiles(files) {
        if (files.length > 0) {
            alert(`You uploaded ${files.length} file(s).`);
        }
    }

    // Handle navigation dropdown
    document.querySelector(".menu select").addEventListener("change", (event) => {
        const selectedPage = event.target.value.toLowerCase();
        alert(`Navigating to ${selectedPage}`); // Placeholder action
    });
});
