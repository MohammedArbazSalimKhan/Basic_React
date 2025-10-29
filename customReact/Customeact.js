
function customRendor(myElement,root){
   /* const domElement=document.createElement(myElement.type)
    domElement.innerHTML=myElement.children
    domElement.setAttribute('href',myElement.props.href)
    domElement.setAttribute('target',myElement.props.target)

    root.appendChild(domElement)*/

    const docElement=document.createElement(myElement.type)
    docElement.innerHTML=myElement.children
    for(const p in myElement.props){
        if(p==='children')continue;
        docElement.setAttribute(p,myElement.props[p])
    }
    root.appendChild(docElement)
}

const myElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    children:'Click me to visist Google.com'
}


const root =document.querySelector('#root')
customRendor(myElement,root)

