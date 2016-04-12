	java -jar bin/SoyToJsSrcCompiler.jar \
			--outputPathFormat dist/js/'{INPUT_FILE_NAME_NO_EXT'}_generated.js \
			--srcs src/template/florist_global.soy,src/template/florist_home.soy
	java -jar bin/closure-stylesheets.jar \
	src/gss/styles.css \
	--output-file dist/css/styles.css
