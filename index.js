const element = document.createElement("div");
undefined
document.body.append(element);
undefined
const ul = document.createElement("ul");
undefined
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
undefined
element.append(ul);
undefined
const element = document.getElementById("main");
element.style.height = "300px";
element.style.backgroundColor = "#27647B";
'#27647B'
element.textContent = "You've changed what's on the screen!";
"You've changed what's on the screen!"
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;
2
element.className = "pet-listing dog";
'pet-listing dog'
<main id="main" class="pet-listing dog"></main>
VM737:1 Uncaught SyntaxError: Unexpected token '<'
<main id="main" class="pet-listing dog"></main>
VM741:1 Uncaught SyntaxError: Unexpected token '<'
<main id="main" class="pet-listing dog"></main>

VM745:1 Uncaught SyntaxError: Unexpected token '<'
<main id="main" class="pet-listing dog">/main>

VM749:1 Uncaught SyntaxError: Unexpected token '<'
element.className = "pet-listing dog";
'pet-listing dog'
<main id="main" class="pet-listing dog"></main>
VM757:1 Uncaught SyntaxError: Unexpected token '<'
<main> id="main" class="pet-listing dog" </main>
VM765:1 Uncaught SyntaxError: Unexpected token '<'
element.classList.remove("dog");
element.classList.add("cat", "sale");
undefined
<main id="main" class="pet-listing cat sale"></main>
VM773:1 Uncaught SyntaxError: Unexpected token '<'
main id="main" class="pet-listing cat sale"
VM777:1 Uncaught SyntaxError: Unexpected identifier 'id'
someElement.removeChild(someChildElement);
VM781:1 Uncaught ReferenceError: someElement is not defined
    at <anonymous>:1:1
(anonymous) @ VM781:1
const ul = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

<li>​2​</li>​
ul.remove();

<script>LISA is the champion</script>