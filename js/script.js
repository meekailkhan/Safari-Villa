document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    // Intersection Observer to start counter on section view
    const counterSection = document.getElementById('featured-section'); // counter section ka ID set karein
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            counter("count1", 0, 100, 3000);
            counter("count2", 100, 12, 2500);
            counter("count3", 0, 15, 3000);
            observer.unobserve(counterSection); // Sirf ek hi baar observe karega
        }
    }, { threshold: 0.5 }); // 0.5 ka matlab section ka 50% viewport mein aane par trigger hoga

    observer.observe(counterSection);
});