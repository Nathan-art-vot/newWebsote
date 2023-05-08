function talk() {
    var know = {
        "Who are you": "Hello, Bot is here",
        "How are you": "Good :^)",
        "What can i do for you": "nothing.",
        "Your Followers": "I have my family of 200000 members, i dont have followers, very supportive family.",
        ok: "okay",
        Bye: "Okay, will meet soon....",
        hello: "hello, im bot. May i help you?",
        cool: "very cool",
        
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML = "Sorry, i didnt understand <br>";
    }
}