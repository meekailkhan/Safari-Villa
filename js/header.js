const header = document.getElementById("header");

header.innerHTML = `<nav class="navbar" id="navbar">
            <div class="nav-log">
                <img src="../assets/Screenshot_from_2024-10-30_15-06-41-removebg-preview.png" alt="">
            </div>
            <div class="nav-desc">
                <ul class="nav-list">
                    <li class="nav-item">HOME</li>
                    <li class="nav-item">ABOUT</li>
                    <li class="nav-item dropdown d-item">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            OUR VILLAS
                        </a>

                    </li>
                    <li class="nav-item dropdown d-item">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Pages
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">VACANCIES</a></li>
                            <li><a class="dropdown-item" href="#">PRICING</a></li>
                            <li><a class="dropdown-item" href="#">OUT STAFF</a></li>
                            <li><a class="dropdown-item" href="#">TESTIMONIALS</a></li>
                            <li><a class="dropdown-item" href="#">FA,q</a></li>
                            <li><a class="dropdown-item" href="#">404 NOT FOUND</a></li>
                            <li><a class="dropdown-item" href="#">COMMING SOON</a></li>
                            <li><a class="dropdown-item" href="#">POPUPS BANNER</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">BLOG</li>
                    <li class="nav-item">CONTACT</li>
                </ul>
                <button class="contact-btn"><img src="../assets/Screenshot_from_2024-09-26_23-35-45-removebg-preview.png" alt=""><span>7878218459</span></button>
            </div>
        </nav>`