mkdir src/components/$1
echo -e "import $1 from './$1';\n\nexport default $1;"> src/components/$1/index.js
echo -e "const $1 = () => {};\n\nexport default $1;"> src/components/$1/$1.js