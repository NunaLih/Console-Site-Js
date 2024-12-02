document.addEventListener('DOMContentLoaded', function () {
	const textarea = document.querySelector('.input');
	const commandContainer = document.getElementById('command-container');
	const promptSpan = document.querySelector('.span1'); //
	let isPasswordMode = false; // режим ввода пароля
	let passwordValue = ''; // введенный пароль
	let isSudoEnabled = false; // проверка пароля на верность
	const correctPassword = 'wired'; // правильный пароль

	textarea.addEventListener('keydown', function (e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleCommand(isPasswordMode ? passwordValue : textarea.value);
			textarea.value = '';
			passwordValue = '';
		} else if (isPasswordMode && e.key.length === 1) {
			e.preventDefault();
			passwordValue += e.key;
			textarea.value += '*';
		} else if (isPasswordMode && e.key === 'Backspace') {
			e.preventDefault();
			passwordValue = passwordValue.slice(0, -1);
			textarea.value = textarea.value.slice(0, -1);
		}
	});

	function handleCommand(inputText) {
		if (isPasswordMode) {
			// проверяем введенный пароль
			if (inputText === correctPassword) {
				isSudoEnabled = true; // использование команды sudo
				const helpText = `

						<div class="box-cont7">
						<span class="wite">Now you can use "sudo"! </span>
						</div>
`;

				appendCommand(helpText);
			} else {
				appendCommand(
					'<div class="box-cont"><span>Wrong password</span></div>'
				);
			}
			isPasswordMode = false;
			promptSpan.textContent = 'heavenly$:';
			return;
		}

		switch (inputText.trim().toLowerCase()) {
			case 'help':
				showHelp();
				break;
			case 'clear':
				clearCommands();
				break;
			case 'game':
				showGame();
				break;
			case 'about':
				aboutMe();
				break;
			case 'ascii':
				bannerAscii();
				break;
			case 'links':
				linksCommand();
				break;
			case 'sudo':
				if (isSudoEnabled) {
					window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
				} else {
					appendCommand(
						'<div class="box-cont"><span>You need to login first! Use "login" command.</span></div>'
					);
				}
				break;
			case 'login':
				enterPassword();
				break;
			default:
				showNotFound(inputText);
				break;
		}
	}

	function enterPassword() {
		isPasswordMode = true;
		const helpText = `
            <div class="action23">
                <span class="span23">heavenly:$</span>
            </div>`;
		promptSpan.textContent = 'Password:';
		appendCommand(helpText);
	}

	// Function help
	function showHelp() {
		const helpText = `
            <div class="action23">
                <span class="span23">heavenly:$ help</span>
            </div>
            <div class="box-cont">
                <span>> help</span>
                <span>> about</span>
                <span>> links</span>
                <span>> game</span>
                <span>> clear</span>
                <span>> ascii</span>
                <span>> login</span>
            </div>`;
		appendCommand(helpText);
	}

	function clearCommands() {
		commandContainer.innerHTML = ''; // Удаляем все элементы внутри контейнера
	}

	// Function game
	function showGame() {
		const gameText = `
            <div class="action23">
                <span class="span23">heavenly:$ game</span>
            </div>
            <div class="box-cont3">
                <span>画面の向こうに座っているあなたと、ここインターネット上のあなたが同じだとは思いませんか？</span>
                <a href="https://3d.laingame.net/#/game" target="_blank">>>>Click me</a>
            </div>`;
		appendCommand(gameText);
	}

	// Function about
	function aboutMe() {
		const aboutText = `
            <div class="action23">
                <span class="span23">heavenly:$ about</span>
            </div>
            <div class="box-cont6">
                <span class ="glitchXXX">...coming soonn</span>
            </div>`;
		appendCommand(aboutText);
	}

	// Function asciiART
	function bannerAscii() {
		const ASCIIart = `
            <div class="action23">
                <span class="span23">heavenly:$ ascii</span>
            </div>
            <div class="box-cont2">
                <pre class="main-text">         ⢠⣤⣄⣀⣠⣤⣶⣿⣯⣿⣽⣾⣷⣶⣶⡦⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣿⣟⣯⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣟⣦⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣾⡷⣄⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣾⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣳⡀⠀⠀⠀
⠀⠀⢠⣿⣿⣽⣿⢿⣿⣿⣿⣿⡿⣿⣿⣿⣿⢿⡿⣽⣿⣿⡿⣿⣿⣏⣿⣿⣿⣟⣿⣳⡄⠀⠀
⠀⠀⣾⣿⣿⣽⣾⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⢿⣿⣾⢿⣷⡿⣿⣿⣷⢿⣿⣿⣷⡿⣷⠀⠀
⠀⢸⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣳⣿⣟⣿⣿⣿⣻⣽⣿⣿⡽⡇⠀
⠀⡿⣿⣿⣿⣿⣾⣿⣿⣿⣿⢿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⡀
⢸⣿⣿⣿⣿⣿⣿⣿⣏⠀⠈⠀⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⢿⡇
⢨⣿⣿⣿⣿⣽⣿⣿⣇⣀⡤⠤⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⠎⠀
⢰⣿⡿⣿⣿⣿⣿⣿⠃⠀⠀⠐⠃⠘⠙⢹⠿⡘⣿⠟⠉⢹⡂⠿⡞⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀
⠀⣿⣿⣿⣿⣿⣿⡞⠅⣀⣀⣀⣀⠉⠓⠚⠀⠁⡏⠀⢛⠋⢀⣀⣀⣋⠸⣿⣿⣿⣿⣿⣿⠃⠀
⠀⣷⣟⣿⣿⣿⣿⣆⠠⡟⣿⣿⣿⡿⠦⠀⠀⠀⠀⠀⠠⢿⣿⣿⣿⠻⢇⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠈⢸⣻⣿⣿⣿⢯⡃⢀⠹⣿⡿⠗⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⠏⣈⠈⣿⣿⣿⣿⣿⣿⠀⠀
⠀⠀⠈⣿⣿⣿⣿⣇⡗⠈⠉⠉⠉⠉⠀⠀⢐⡀⠀⠀⠀⠈⠉⠉⠉⠑⢸⣸⣿⡟⣿⣿⡟⠀⠀
⠀⠀⠀⢻⣿⣽⣿⡏⢿⡆⠀⠀⠀⠀⠀⠀⠸⢆⡄⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⡿⠇⠀⠀
⠀⠀⠀⠈⠿⣿⢿⡇⠀⠙⢦⡀⠀⠀⠀⠐⠲⠤⠔⠂⠀⠀⠀⢀⣴⣾⣿⣿⣿⣿⣿⡟⠀⠀⠀
⠀⠀⠀⠀⠀⠘⣿⣇⠀⠀⠀⠙⠢⣄⡀⠀⠀⠀⠀⣀⣐⣺⣵⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⠋⠀⠀⠀⠀⠀⢹⢨⠑⠲⠤⠞⠋⠉⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠈⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣀⣠⢤⡠⠒⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀
⠀⠀⣠⠔⠒⠉⠁⠀⠀⠘⠶⣲⠄⠀⠀⠈⠀⠀⠀⢠⢀⠀⠀⣀⠤⢻⣿⣿⣿⡏⠐⠲⣄⠀⠀
⠀⢰⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠓⠒⠚⢕⡀⠀⠀⣠⠖⠒⠚⠁⠀⢾⣿⣿⣿⡁⠀⠀⠨⡆⠀
⠀⢸⠀⠀⠀⠒⠒⠒⠒⠒⠂⠀⠐⠚⠑⠆⠀⠀⠒⠓⠀⠀⠀⠀⠀⣿⣿⣿⣿⡆⠀⠀⠀⣇⠀
⠀⠈⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀</pre>
            </div>`;
		appendCommand(ASCIIart);
	}

	// Function links
	function linksCommand() {
		const linksPage = `
            <div class="action23">
                <span class="span23">heavenly:$ links</span>
            </div>
            <div class="box-cont5">
                <a href="https://soundcloud.com/n22e1" target="_blank">>>>Soundcloud</a>
                <a href="https://github.com/lainoAI" target="_blank">>>>GitHub</a>
            </div>`;
		appendCommand(linksPage);
	}

	// Function Notfound
	function showNotFound(command) {
		const notFoundText = `
            <div class="box-cont2">
                <span>command "${command}" not found</span>
            </div>`;
		appendCommand(notFoundText);
	}

	// append all comand
	function appendCommand(htmlContent) {
		const newCommandDiv = document.createElement('div');
		newCommandDiv.classList.add('box-comand');
		newCommandDiv.innerHTML = htmlContent;
		commandContainer.appendChild(newCommandDiv);
	}
});
