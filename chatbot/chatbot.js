document.addEventListener("DOMContentLoaded", () => {
    const chatbotBtn = document.getElementById("chatbot-button");
    const chatbotBox = document.getElementById("chatbot-container");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotMessages = document.getElementById("chatbot-messages");

    if (!chatbotBtn || !chatbotBox) {
        console.error("Chatbot elements not found");
        return;
    }

    chatbotBtn.addEventListener("click", () => {
        chatbotBox.style.display = "flex";
    });

    chatbotClose.addEventListener("click", () => {
        chatbotBox.style.display = "none";
    });

    chatbotSend.addEventListener("click", sendMessage);

    chatbotInput.addEventListener("keypress", e => {
        if (e.key === "Enter") sendMessage();
    });

    function addMessage(text, sender) {
        const msg = document.createElement("div");
        msg.className = `chat-message ${sender}`;
        msg.textContent = text;
        chatbotMessages.appendChild(msg);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function sendMessage() {
        const text = chatbotInput.value.trim();
        if (!text) return;

        addMessage(text, "user");
        chatbotInput.value = "";

        setTimeout(() => {
            addMessage(
                "I can help you with products, sizing, availability, or orders.",
                "bot"
            );
        }, 500);
    }
});
