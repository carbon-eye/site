const faqQuestion = document.querySelectorAll('.faq-question');

faqQuestion.forEach(question => {
    question.addEventListener("click" , () => {
        const faqItem = question.closest('.faq-item');
        faqItem.classList.toggle('open');
    });
});