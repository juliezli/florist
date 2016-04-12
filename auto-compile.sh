when-changed src/template/florist_global.soy src/template/florist_home.soy \
-c \
	java -jar bin/SoyToJsSrcCompiler.jar \
			--outputPathFormat dist/js/'{INPUT_FILE_NAME_NO_EXT'}_generated.js \
			--srcs src/template/florist_global.soy,src/template/florist_home.soy



