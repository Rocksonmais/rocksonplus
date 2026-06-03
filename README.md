# rocksonplus<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rockson+ IPTV Premium</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">
</head>

<body>

<header>

<nav>
<div class="logo">Rockson<span>+</span></div>

<div class="menu">
<a href="#planos">Planos</a>
<a href="#vantagens">Vantagens</a>
<a href="#contato">Contato</a>
</div>
</nav>

<div class="hero">

<h1>IPTV PREMIUM</h1>

<p>
Milhares de canais, filmes, séries e futebol ao vivo
com qualidade máxima.
</p>

<a href="https://wa.me/5531998713541" class="btn">
TESTE GRÁTIS
</a>

</div>

</header>

<section id="planos">

<h2>Escolha Seu Plano</h2>

<div class="cards">

<div class="card">
<h3>Mensal</h3>
<div class="preco">R$ 24,99</div>
<p>Acesso completo</p>

<a href="https://wa.me/5531998713541">
Contratar
</a>
</div>

<div class="card destaque">
<h3>Trimestral</h3>
<div class="preco">R$ 74,99</div>
<p>Melhor custo-benefício</p>

<a href="https://wa.me/5531998713541">
Contratar
</a>
</div>

<div class="card">
<h3>Anual</h3>
<div class="preco">R$ 249,99</div>
<p>Economia máxima</p>

<a href="https://wa.me/5531998713541">
Contratar
</a>
</div>

</div>

</section>

<section id="vantagens">

<h2>Por que escolher Rockson+?</h2>

<div class="vantagens">

<div>
📺 +20.000 Canais
</div>

<div>
🎬 Filmes Atualizados
</div>

<div>
📡 Futebol Ao Vivo
</div>

<div>
⚡ Sem Travamentos
</div>

<div>
📱 Smart TV, TV Box e Celular
</div>

<div>
🛠 Suporte Rápido
</div>

</div>

</section>

<section id="contato">

<h2>Contato</h2>

<p>
Instagram:
<strong>@rocksonmaisiptv</strong>
</p>

<p>
WhatsApp:
<strong>(31) 99871-3541</strong>
</p>

<a href="https://wa.me/5531998713541" class="btn">
Falar no WhatsApp
</a>

</section>

<footer>

<p>
© 2026 Rockson+ IPTV Premium
</p>

</footer>

<script src="script.js"></script>

</body>
</html>*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#07030f;
color:white;
}

header{
min-height:100vh;
background:
linear-gradient(
135deg,
#2c005a,
#120024,
#000
);

display:flex;
flex-direction:column;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:25px 8%;
}

.logo{
font-size:2rem;
font-weight:800;
}

.logo span{
color:#c44dff;
text-shadow:0 0 15px #c44dff;
}

.menu a{
margin-left:25px;
color:white;
text-decoration:none;
}

.hero{
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero h1{
font-size:4rem;
color:#d86fff;

text-shadow:
0 0 10px #d86fff,
0 0 20px #d86fff,
0 0 40px #d86fff;
}

.hero p{
max-width:600px;
margin:20px 0;
font-size:1.1rem;
}

.btn{
display:inline-block;
padding:15px 35px;
background:#c44dff;
color:white;
text-decoration:none;
border-radius:50px;

box-shadow:
0 0 15px #c44dff,
0 0 35px #c44dff;
}

section{
padding:80px 8%;
}

section h2{
text-align:center;
margin-bottom:40px;
font-size:2.5rem;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:#130720;
padding:30px;
border-radius:20px;
text-align:center;
border:1px solid #6d1dbd;
}

.card h3{
font-size:1.8rem;
}

.preco{
font-size:2rem;
font-weight:700;
margin:20px 0;
color:#d86fff;
}

.card a{
display:inline-block;
margin-top:20px;
background:#c44dff;
padding:12px 25px;
border-radius:40px;
text-decoration:none;
color:white;
}

.destaque{
transform:scale(1.05);
box-shadow:
0 0 25px #b545ff;
}

.vantagens{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.vantagens div{
background:#130720;
padding:25px;
border-radius:15px;
text-align:center;
}

#contato{
text-align:center;
}

#contato p{
margin:15px 0;
font-size:1.1rem;
}

footer{
text-align:center;
padding:30px;
background:#000;
}

@media(max-width:768px){

.hero h1{
font-size:2.8rem;
}

.menu{
display:none;
}

}const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transition = "0.3s";
card.style.transform = "translateY(-8px)";
});

card.addEventListener("mouseleave", () => {

if(card.classList.contains("destaque")){
card.style.transform = "scale(1.05)";
}else{
card.style.transform = "translateY(0)";
}

});

});
