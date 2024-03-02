
function Home() {
    return(
        <>
        <header>
            <h1>SAAJHA</h1>
        </header>

        <section>
            <h3>About Us</h3>
            <p>"SAAJHA" is an NGO dedicated to promoting inclusivity, collaboration, and equitable development in communities. 
                The name reflects a commitment to unity and collective efforts for a common goal. 
                The organization focuses on creating opportunities for education, empowerment, and social development, ensuring access to resources for the well-being of individuals from all backgrounds. 
                "SAAJHA" also emphasizes building bridges between different segments of society, fostering harmony and a sense of togetherness.</p>
        </section>

        <section>
            <h3>Our Projects</h3>
            <p>We run projects in various areas</p>    
        </section>

        <section class="contact" onclick="showMenu(event)">
            <h3>Contact</h3>
            <div class="contact-menu">
            <a href="tel:90xxxxxxxx">Call Us</a>
            <a href="www.saajha@gmail.com">Email</a> 
            <address>123 NGO Street City, State 12345</address>
            </div>
        </section>
        </>
    )
}

export default Home;