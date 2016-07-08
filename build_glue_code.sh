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

em++ -O2 libnoise_glue.cpp -Lbuild/src -lnoise --post-js glue.js -s DEMANGLE_SUPPORT=1 -o build/libnoise.js
