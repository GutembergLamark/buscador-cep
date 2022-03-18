import React from "react";

export default document.addEventListener("keypress", function(e){

    if(e.key === 'Enter'){

        var btn = document.querySelector("#submit");

        btn.click();
    }
});