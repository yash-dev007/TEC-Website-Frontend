// Mobile menu toggle
const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when clicking on links
const mobileLinks = document.querySelectorAll(".mobile-link")
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]')
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 64 // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// FAQ accordion functionality
const faqItems = document.querySelectorAll(".faq-item")
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question")
  question.addEventListener("click", () => {
    // Close other open items
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active")
      }
    })

    // Toggle current item
    item.classList.toggle("active")
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe timeline items
const timelineItems = document.querySelectorAll(".timeline-content")
timelineItems.forEach((item) => {
  observer.observe(item)
})

// Observe cards and sections
const animatedElements = document.querySelectorAll(
  ".about-card, .competition-card, .phase-card, .sponsor-card, .info-card",
)
animatedElements.forEach((element) => {
  observer.observe(element)
})

// Parallax effect for floating particles
let mouseX = 0
let mouseY = 0

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY

  const particles = document.querySelectorAll(".particle")
  particles.forEach((particle, index) => {
    const speed = (index + 1) * 0.02
    const x = mouseX * speed
    const y = mouseY * speed

    particle.style.transform = `translate(${x}px, ${y}px)`
  })
})

// Hero logo parallax effect
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroLogo = document.querySelector(".hero-logo")

  if (heroLogo) {
    const parallax = scrolled * 0.5
    heroLogo.style.transform = `translateY(${parallax}px)`
  }
})

// Progress bar animations
const progressBars = document.querySelectorAll(".progress-fill")
const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running"
      }
    })
  },
  { threshold: 0.5 },
)

progressBars.forEach((bar) => {
  progressObserver.observe(bar)
})

// Form submission
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Simple validation
    if (!data.email || !data.message) {
      alert("Please fill in all required fields.")
      return
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Message sent successfully!")
      contactForm.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Scroll indicator animation
const scrollIndicator = document.querySelector(".scroll-indicator")
if (scrollIndicator) {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    if (scrolled > 100) {
      scrollIndicator.style.opacity = "0"
    } else {
      scrollIndicator.style.opacity = "1"
    }
  })
}

// Timeline node animations with delay
const timelineNodes = document.querySelectorAll(".timeline-node")
const nodeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.animation = "scaleIn 0.6s forwards, ping 2s infinite 0.6s"
        }, index * 200)
      }
    })
  },
  { threshold: 0.5 },
)

timelineNodes.forEach((node) => {
  nodeObserver.observe(node)
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0, 0, 0, 0.95)"
  } else {
    navbar.style.background = "rgba(0, 0, 0, 0.8)"
  }
})

// Initialize animations on page load
document.addEventListener("DOMContentLoaded", () => {
  // Add initial animation states
  const animatedElements = document.querySelectorAll(".timeline-content, .about-card, .competition-card")
  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(50px)"
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease"
  })

  // Trigger hero animations
  const heroText = document.querySelector(".hero-text")
  const heroLogo = document.querySelector(".hero-logo")

  if (heroText) {
    heroText.style.animation = "fadeInUp 0.8s ease forwards"
  }

  if (heroLogo) {
    heroLogo.style.animation = "fadeInUp 0.8s ease 0.2s forwards"
    heroLogo.style.opacity = "0"
  }
})

// Add CSS animations for hero elements
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

// Mentors Section

// Social media links for each mentor
const socialLinks = {
    marcus: {
        linkedin: 'https://linkedin.com/in/marcus-rodriguez',
        twitter: 'https://twitter.com/marcus_f1',
        instagram: 'https://instagram.com/marcus_f1_engineer'
    },
    sarah: {
        linkedin: 'https://linkedin.com/in/sarah-chen-coach',
        twitter: 'https://twitter.com/sarah_f1_coach',
        instagram: 'https://instagram.com/sarah_performance'
    },
    alessandro: {
        linkedin: 'https://linkedin.com/in/alessandro-rossi-tech',
        twitter: 'https://twitter.com/alessandro_f1',
        instagram: 'https://instagram.com/alessandro_tech'
    }
};

// Function to open social media links
function openSocial(platform, mentor) {
    const url = socialLinks[mentor][platform];
    if (url) {
        window.open(url, '_blank');
    }
}

// Add smooth scroll behavior and enhanced interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add click animations to cards
    const mentorCards = document.querySelectorAll('.mentor-card');
    
    mentorCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on social buttons
            if (!e.target.closest('.social-btn')) {
                // Add a subtle click effect
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }
        });
    });

    // Add loading animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Initially hide cards for animation
    mentorCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
});

// JS to move the bright spot
document.querySelectorAll('.about-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });

  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--x', `50%`);
    card.style.setProperty('--y', `50%`);
  });
});
