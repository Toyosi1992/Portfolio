<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toyosi D. | Senior Business Analyst & Developer</title>
    <link rel="stylesheet" href="CSS/portfolio.css">
</head>
<body>

    <nav class="Navbar">
        <a href="#Home" class="active">HOME</a>
        <a href="#About">ABOUT</a>
        <a href="#GitHub">PROJECTS</a>
        <a href="#Contact">CONTACT</a>
    </nav>

    <header id="Home">
        <div class="Overlay"></div>
        <video autoplay muted loop playsinline id="Typing_Video">
            <source src="images/video/Typing.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>
        <div class="Video_Text">
            <h1 class="white-text">Toyosi Damilola</h1>
            <p>Senior Business Analyst | Project Manager | Developer</p>
        </div>
    </header>

    <main>
        <section class="Row" id="About">
            <div class="Column_2">
                <img src="images/toyosi_profile.png" alt="Toyosi Profile" class="Profile_Photo">
            </div>
            <div class="Column_1">
                <h1>Professional Profile</h1>
                <p>With 9 years of experience, I bridge the gap between business needs and technical execution. I specialize in Agile methodologies, SQL data analysis, and full-stack solutions.</p>
            </div>
        </section>

        <section class="Row" id="GitHub">
            <div class="Column_1">
                <h1>Technical Portfolio</h1>
                <p>Explore my repositories for code samples in JavaScript, C#, and SQL.</p>
                <a href="https://github.com/Toyosi1992" target="_blank" class="btn">VIEW GITHUB</a>
            </div>
            <div class="Column_2">
                <img src="images/GitHub.png" alt="GitHub Logo" class="hover-zoom">
            </div>
        </section>

        <section class="Row" id="Contact">
            <div class="Column_1">
                <h1>Get In Touch</h1>
                <form action="https://formspree.io/f/your-id" method="POST">
                    <label>Name</label>
                    <input type="text" name="name" required>
                    <label>Email</label>
                    <input type="email" name="email" required>
                    <label>Message</label>
                    <textarea name="message" rows="5"></textarea>
                    <input type="submit" value="SEND">
                </form>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Toyosi Damilola | Built with HTML, CSS, & JS</p>
    </footer>

    <script src="JS/portfolio.js"></script>
</body>
</html>



/* General Styles */
html {
    scroll-behavior: smooth; /* Native smooth scroll fallback */
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

/* Navbar Upgrades */
.Navbar {
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    text-align: center;
    transition: 0.5s;
}

.Navbar a {
    display: inline-block;
    color: white;
    padding: 20px;
    text-decoration: none;
    font-weight: bold;
}

/* Video Header with Overlay */
#Home {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

#Typing_Video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.Overlay {
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.Video_Text {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    color: white;
    transform: translateY(-50%);
}

/* Responsive Flexbox Rows */
.Row {
    display: flex;
    flex-wrap: wrap;
    padding: 50px 10%;
    align-items: center;
}

.Column_1, .Column_2 {
    flex: 1;
    min-width: 300px; /* Forces stack on mobile */
}

.Profile_Photo {
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Hover Effects */
.hover-zoom {
    transition: transform .3s;
}

.hover-zoom:hover {
    transform: scale(1.1);
}



// Function to handle the sticky navbar color change on scroll
window.onscroll = function() {
    var navbar = document.querySelector(".Navbar");
    if (window.pageYOffset > 100) {
        navbar.style.backgroundColor = "black";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    }
};

// Simple Form Validation - Checking if email is valid before submit
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const email = document.querySelector('input[type="email"]').value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Stops the form from sending
    } else {
        console.log("Form submitted successfully!");
    }
});

// Logic to highlight the active link in the Navbar based on section
document.querySelectorAll('.Navbar a').forEach(link => {
    link.onclick = function() {
        document.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    };
});