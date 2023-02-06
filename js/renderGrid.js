function renderGrid (statusCode) {
  const codes = statusCode.reverse();
  // creates document fragment
  var fragment = document.createDocumentFragment();
  const container = document.createElement("div");
    while (statusCode.length > 0) {
    // creates DOM elements
    const wrapper = document.createElement("a");
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    const statusNumber = document.createElement("p"); 
    const statusDescription = document.createElement("p");
    const statusDescriptionSm = document.createElement("small");
    const currentCode = statusCode.pop();
    // sets class attribute to DOM elements
    container.setAttribute("class", "container");
    wrapper.setAttribute("class", "wrapper");
    imageContainer.setAttribute("class", "image-container");
    statusNumber.setAttribute("class", "status-number");
    statusDescription.setAttribute("class", "status-description");
    statusDescriptionSm.setAttribute("class", "status-description-smll");
    // defines a href and image source
    wrapper.setAttribute("href", "./code-" + currentCode.statusNumber + ".html");
    image.src = currentCode.src;
    image.alt = currentCode.statusTitle;
    statusNumber.innerText = currentCode.statusNumber;
    statusDescription.innerText = currentCode.statusTitleEs;
    statusDescriptionSm.innerText = currentCode.statusTitle;

    // append elements
    imageContainer.appendChild(image);
    wrapper.appendChild(imageContainer);
    wrapper.appendChild(statusNumber);
    wrapper.appendChild(statusDescription);
    wrapper.appendChild(statusDescriptionSm);
    container.appendChild(wrapper);
    // append container to fragment
    fragment.appendChild(container);
  }
  const footer = document.createElement("footer");
  const copyright = document.createElement("p");
  copyright.setAttribute("id", "year")
  copyright.innerText = "© " + new Date().getFullYear();
  const footerLeft = document.createElement("div");
  footerLeft.setAttribute("class", "left-wrapper");
  const footerTitle = document.createElement("p");
  footerTitle.innerText = "Felizmente construido por ";
  const footerLink = document.createElement("a");
  footerLink.setAttribute("class", "author-name");
  footerLink.setAttribute("href", "https://www.twitter.com/yaariii3");
  footerLink.innerText = " @yaariii3";
  footerLeft.appendChild(footerTitle);
  footerLeft.appendChild(footerLink);
  
  footer.appendChild(copyright);
  footer.appendChild(footerLeft);
  fragment.appendChild(footer);
  // append fragment to DOM
  document.getElementsByTagName('body')[0].appendChild(fragment);
}