export const setStorage =  (listLink) => {
    localStorage.setItem("link", JSON.stringify(listLink));
  
  
};
export const getStorage = async () => {
  const data= await JSON.parse(localStorage.getItem("link"));
  return data
 
};

export const setItemStorage = async (newLink) => {

  let items =JSON.parse(localStorage.getItem("link"));
  items.push(newLink)
  return localStorage.setItem('link',JSON.stringify(items));
};

export const updateLinkStorage = async (linkUpdate) => {

  let items =JSON.parse(localStorage.getItem("link"));
  
  items.forEach(link => {
    if(link.linkOrigin===linkUpdate.linkOrigin){
      link.copy=linkUpdate.copy;
    }
  });
  return localStorage.setItem('link',JSON.stringify(items));
  
};


