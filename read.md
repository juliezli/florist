Commands:
=========
	java -jar bin/SoyToJsSrcCompiler.jar \
			--outputPathFormat '{INPUT_FILE_NAME_NO_EXT'}_generated.js \
			--srcs florist_global.soy, florist_home.soy

	java -jar bin/closure-stylesheets.jar \
			src/css/main.css \  
			--output-file dist/css/main.css



	when-changed src/template/florist_global.soy java -jar bin/SoyToJsSrcCompiler.jar --srcs src/template/florist_global.soy --outputPathFormat dist/js/main.js 
	when-changed src/css/main.css java -jar bin/closure-stylesheets.jar src/css/main.css  --output-file dist/css/main.css