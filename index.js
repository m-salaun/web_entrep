const ratio = .1
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
  }
const handleIntersect = function(entries, observe)
{
    entries.forEach(function(entry)
    {
        if(entry.intersectionRatio > ratio)
        {
            entry.target.classList.add('reveal-visible')
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
    observer.observe(r)
})
/*------------------------------------------------------------------------*/

