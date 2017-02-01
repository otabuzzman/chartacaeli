rem test compilation on Windows without CUDA capable device
set CUDA_HOME=%userprofile%\lab\cudacons\cuda_8.0.44_windows\compiler
cd %userprofile%\src\chartacaeli\chartacaeli\gpu
rem compile object file(s)
%CUDA_HOME%\bin\nvcc -Wno-deprecated-gpu-targets -I%CUDA_HOME%\..\CUDASamples\common\inc -o dcp\Coordinate.o -dc dcp\Coordinate.cu
%CUDA_HOME%\bin\nvcc -Wno-deprecated-gpu-targets -I%CUDA_HOME%\..\CUDASamples\common\inc -o dcp\Math.o -dc dcp\Math.cu
%CUDA_HOME%\bin\nvcc -DP4ORTHOGRAPHIC_MAIN -Wno-deprecated-gpu-targets -I%CUDA_HOME%\..\CUDASamples\common\inc -o dcp\P4Orthographic.o -dc dcp\P4Orthographic.cu
rem compile executable file
%CUDA_HOME%\bin\nvcc -Wno-deprecated-gpu-targets -o dcp\P4Orthographic.exe dcp\P4Orthographic.o dcp\Coordinate.o dcp\Math.o
