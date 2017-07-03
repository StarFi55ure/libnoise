#!/bin/bash

source $EM_PATH/emsdk_env.sh

root_dir=$PWD

mkdir -p build
cd build

emcmake cmake ..
emmake make

cd $root_dir

# run build commands
python $EMSCRIPTEN/tools/webidl_binder.py libnoise.idl glue

#cat glue.js export_module.js > postfix.js
cat glue.js > postfix.js

rm build/libnoise.js
em++ -s EXPORT_NAME="'LibNoise'" -s MODULARIZE=1 -O2 --memory-init-file 0 libnoise_glue.cpp -Lbuild/src -lnoise --post-js postfix.js -s DEMANGLE_SUPPORT=1 -o build/libnoise.js

# create npm package
cd $PWD
mkdir -p npmpackage
cp package.json npmpackage/
cp build/libnoise.js npmpackage/
cp README.md npmpackage/
cp LICENSE npmpackage/
