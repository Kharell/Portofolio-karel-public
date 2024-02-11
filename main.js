   
   var words = ["I'am an Informatics Engineering 😁", "And Frontend Developer 😎", "With Javascript ✌️👌"];
   var currentWordIndex = 0;
   var currentLetterIndex = 0;
   var textElement = document.getElementById('textContainer');
   var interval;

   // Fungsi untuk menampilkan teks satu huruf per satu
   function typeWriter() {
       if (currentLetterIndex < words[currentWordIndex].length) {
           textElement.textContent += words[currentWordIndex].charAt(currentLetterIndex);
           currentLetterIndex++;
       } else {
           clearInterval(interval);
           currentWordIndex++;
           if (currentWordIndex >= words.length) {
               currentWordIndex = 0;
           }
           setTimeout(function() {
               textElement.textContent = '';
               currentLetterIndex = 0;
               interval = setInterval(typeWriter, 100);
           }, 1000);
       }
   }

   // Mulai animasi
   interval = setInterval(typeWriter, 100);


// buuton download cv saya
const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://drive.google.com/file/d/1RlCYoZiOHXLDK_OK8CRPFzDYTeRweQjR/view?usp=sharing";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
        }, 30000);
    }, 100);
}

downloadBtn.addEventListener("click", initTimer);





// kirim pesan ke email saya
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact").querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Kirim data ke backend untuk diproses
        sendDataToBackend(name, email, message);
    });

    function sendDataToBackend(name, email, message) {
        // Ganti URL ini dengan URL backend Anda
        const backendURL = "https://formspree.io/f/xrgnqzqo";

        fetch(backendURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                // Berhasil mengirim data, arahkan ke halaman terima kasih
                window.location.href = "makasi.html";
            } else {
                alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
        });
    }
});
