document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded: JavaScript initialized.");

    // ✅ Improved Drag & Drop Upload Handling
    const dropZone = document.querySelector(".drop-zone");
    const fileInput = document.getElementById("file-upload");

    if (dropZone && fileInput) {
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
            fileInput.click();
        });

        fileInput.addEventListener("change", () => {
            handleFiles(fileInput.files);
        });
    }

    function handleFiles(files) {
        if (files.length > 0) {
            console.log(`User uploaded ${files.length} file(s).`);
            alert(`You uploaded ${files.length} file(s).`);

            // ✅ File Type & Size Validation
            for (let file of files) {
                if (!file.type.startsWith("image/")) {
                    alert(`❌ ${file.name} is not an image! Only images allowed.`);
                    return;
                }
                if (file.size > 5 * 1024 * 1024) { // 5MB limit
                    alert(`❌ ${file.name} is too large! Max 5MB.`);
                    return;
                }
            }
        }
    }

    // ✅ Improved Navigation Handling
    const pageSelector = document.getElementById("page-selector");
    const allowedUrls = {
        "home": "/",
        "about": "/about",
        "contact": "/contact"
    };

    if (pageSelector) {
        pageSelector.addEventListener("change", (event) => {
            const selectedPage = event.target.value.toLowerCase();
            if (allowedUrls[selectedPage]) {
                window.location.href = allowedUrls[selectedPage];
            } else {
                console.error(`Invalid selection: ${selectedPage}`);
            }
        });
    }
});
