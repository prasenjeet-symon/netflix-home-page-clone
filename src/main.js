
let is_faq_opened = new Map()

const all_faqs = document.getElementsByClassName('faq_header')

for(let index = 0; index < all_faqs.length; index++){
    const faq_header = all_faqs[index]
    const faq_body = faq_header.nextElementSibling

    faq_header.addEventListener('click', (e)=>{
        e.preventDefault()
        e.stopPropagation()

        // close all opened faqs

        for(let index_inner = 0; index_inner < all_faqs.length; index_inner++){
            if(index !== index_inner){
                // other faq than this
                const faq_header = all_faqs[index_inner]
                const faq_body = faq_header.nextElementSibling
                faq_body.className = 'faq_body hidden'
                faq_header.children[1].innerHTML = '<span class="material-icons"> add </span>'
                is_faq_opened.set(index_inner, false)
            }
        }

        if(is_faq_opened.get(index)){
            faq_body.className = 'faq_body hidden'
            is_faq_opened.set(index, false)
            faq_header.children[1].innerHTML = '<span class="material-icons"> add </span>'

        }else{
            faq_body.classList = 'faq_body show'
            is_faq_opened.set(index, true)
            faq_header.children[1].innerHTML = '<span class="material-icons"> clear </span>'
        }
    })
}