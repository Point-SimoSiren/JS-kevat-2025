
//----------------- Suoritetaan alussa aina ----------------
        
            let x = '<h1 style="font-size: 150px;">Welcome to my pages!</h1>'
            document.getElementById("root").innerHTML = x

            setTimeout(() => {document.getElementById("root").innerHTML = ""},
                3000
             )

//---------------- NAVIGOINTI -----------------------------------------

          function whoAmI() {
            let x = "<h5>Olen junior ohjelmistokehittäjä</h5>"
            document.getElementById("root").innerHTML = x
          }
        

        function mySkills() {
        let x = `<ul>
                    <li>SQL</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                 </ul>`
        document.getElementById("root").innerHTML = x
        }


        function sayHello() {
         alert("Hello World!")
        }

        //---------- SETTER ----------------------------

        document.getElementById("ref_btn").addEventListener("click", function(){

            let h = document.createElement("h3")
            let t = document.createTextNode("Hello World!")
            
            h.appendChild(t)

            let root = document.getElementById("root")
            root.innerHTML = ""
            root.appendChild(h)

        })
