<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte'
	import { modalOpened } from '$lib/store';
</script>

<svelte:head>
	<title>Crystal Chavez - Main page</title>
</svelte:head>
<main>
	<h1>Hi!✋ <br /> I'm Crystal a Junior Web Developer 💻 based in Cali</h1>
	<div class="icons">
		<a
			href="https://github.com/crystalchavez99"
			aria-label="GitHub"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/in/cchavez99/"
			aria-label="Linkedin"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaLinkedin />
			</div>
		</a>
		<a
			href="https://medium.com/@crystalchavez99"
			aria-label="Medium"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaMedium />
			</div>
		</a>
		<a
			href="https://x.com/chavezcrystal99"
			aria-label="Medium"
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="icon">
				<FaTwitterSquare />
			</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ca3c25;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
