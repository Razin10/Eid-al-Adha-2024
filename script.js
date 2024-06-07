const targetDate = new Date('2024-06-17');

function updateCountdown() {
    const now = new Date();
    const diffMs = targetDate.getTime() - now.getTime();

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

    const countdownString = `ঈদ আসতে বাকি: ${days} দিন ${hours} ঘণ্টা ${minutes} মিনিট ${seconds} সেকেন্ড`;
    document.getElementById('countdown').textContent = countdownString;

    setTimeout(updateCountdown, 1000);
}

updateCountdown();