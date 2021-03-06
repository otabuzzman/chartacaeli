ifeq ($(OS),Windows_NT)
	winos := 1
else
	linos := 1
endif

JNI = c3p

# this package
PKG = org.chartacaeli.gpu

# C3P test package
TST = $(PKG).$(c3ptst)

# top-level directory is current minus package (e.g. /foo/bar/hot minus bar.hot yields /foo)
topdir = $(subst $(subst .,/,$(PKG)),,$(CURDIR))

c3psrc = c3p
c3ptst = tst

dcpsrc = dcp

ifdef winos
C3PDLL = $(JNI).dll
else
C3PDLL = lib$(JNI).so
endif

# C++ peer classes
C3PIMP = \
	$(c3psrc)/Coordinate.cpp \
	$(c3psrc)/Vector3D.cpp \
	$(c3psrc)/Plane.cpp \
	$(c3psrc)/Math.cpp \
	$(c3psrc)/RealMatrix.cpp \
	$(c3psrc)/P4Mollweide.cpp \
	$(c3psrc)/P4Orthographic.cpp \
	$(c3psrc)/P4Stereographic.cpp \

C3POBJ = \
	$(subst .cpp,.o,$(C3PIMP)) \
	$(subst .cxx,.o,$(C3PJXX)) \

C3PEXE = $(basename $(C3PIMP))

# JNI wrapper for JUnit testing
C3PJNI = $(patsubst $(c3psrc)/%.cpp,$(c3ptst)/%.java,$(C3PIMP) $(c3psrc)/PJ2TextureMapperC3p.cpp)
C3PJXX = $(subst .java,_jni.cxx,$(C3PJNI))

# JUnit test classes
C3PTST = $(wildcard $(c3ptst)/*Test.java)

# derived CUDA peer implementations (double precision)
DCPIMP = \
	$(dcpsrc)/Coordinate.cu \
	$(dcpsrc)/Vector3D.cu \
	$(dcpsrc)/Plane.cu \
	$(dcpsrc)/Math.cu \
	$(dcpsrc)/RealMatrix.cu \
	$(dcpsrc)/P4Mollweide.cu \
	$(dcpsrc)/P4Orthographic.cu \
	$(dcpsrc)/P4Stereographic.cu \

DCPOBJ = $(subst .cu,.o,$(DCPIMP))

DCPEXE = $(basename $(DCPIMP))

# derived CUDA peer implementations (single precision)
DCPIMP_F = \
	$(dcpsrc)/Coordinate_f.cu \
	$(dcpsrc)/Vector3D_f.cu \
	$(dcpsrc)/Plane_f.cu \
	$(dcpsrc)/Math_f.cu \
	$(dcpsrc)/P4Mollweide_f.cu \
	$(dcpsrc)/P4Orthographic_f.cu \
	$(dcpsrc)/P4Stereographic_f.cu \

DCPOBJ_F = $(subst .cu,.o,$(DCPIMP_F))

DCPEXE_F = $(basename $(DCPIMP_F))

# actual kernel objects (double precision)
GPUIMP = \
	PJ2TextureMapperGpu.cu \
	$(dcpsrc)/Coordinate.cu \
	$(dcpsrc)/Vector3D.cu \
	$(dcpsrc)/Vector4D.cu \
	$(dcpsrc)/Plane.cu \
	$(dcpsrc)/Math.cu \
	$(dcpsrc)/P4Mollweide.cu \
	$(dcpsrc)/P4Orthographic.cu \
	$(dcpsrc)/P4Stereographic.cu \

GPUOBJ = $(subst .cu,.o,$(GPUIMP))

# actual kernel objects (single precision)
GPUIMP_F = $(GPUIMP:.cu=_f.cu)
GPUOBJ_F = $(GPUIMP_F:.cu=.o)

# default goal
cuda: PJ2TextureMapperGpu_f.cubin

$(C3PJXX):
	( cd $(c3psrc) ; for c in $(notdir $(basename $(C3PIMP))) PJ2TextureMapperC3p ; do \
		$(CXXWRAP) \
			--jni --jni-attributes \
			--classpath=$(topdir) \
			--package-prefix=$(TST) $$c.h ; \
		if expr $$c : P4 ; then \
			sed -e 's,public class.*,public class '$$c' extends Object implements P4Projector {,' \
			<../$(c3ptst)/$$c.java \
			>../$(c3ptst)/$$c.$$$$ ; \
			mv ../$(c3ptst)/$$c.$$$$ ../$(c3ptst)/$$c.java ; fi ; done )

JAREXT = \
	junit4.jar \
	hamcrest.jar \

pkgdir = $(subst .,/,$(PKG))

# pragma to build C3P test classes from command line...
testbuild: $(C3PDLL) | $(JAREXT)
	( cd $(topdir) ; \
		javac -classpath "$(subst $(space),$(sep), \
			$| \
			lib/jts-1.14.jar \
			lib/commons-math3-3.5.jar \
			$(addprefix $(pkgdir)/,$(JAREXT)))" \
			-d . $(addprefix $(pkgdir)/,$(C3PJNI) $(C3PTST) $(c3ptst)/P4Projector.java $(c3ptst)/RandomDataset.java) )

# pragma to run C3P test classes from command line...
testrun: $(C3PTST)
	@( cd $(topdir) ; \
		PATH=$(pkgdir):$$PATH ; \
		LD_LIBRARY_PATH=$(pkgdir):$$LD_LIBRARY_PATH ; \
		for t in $(notdir $(basename $(C3PTST))) ; do \
			echo "*** $$t ***" ; \
			java -classpath "$(subst $(space),$(sep), \
				org/chartacaeli \
				lib/jts-1.14.jar \
				lib/commons-math3-3.5.jar \
				$(addprefix $(pkgdir)/,$(JAREXT)))" \
				org.junit.runner.JUnitCore $(TST).$$t ; done )

.PHONY: all cuda testbuild testrun clean c3pclean dcpclean gpuclean lclean rclean tidy
.SUFFIXES: .cxx .cu .cubin .dll .so

empty =
space = $(empty) $(empty)

vpath %.cpp $(c3psrc)
vpath %.cu $(c3psrc)

ifdef winos
sep := ;
else
sep := :
endif

# see GNU make manual 4.14 "Generating Prerequisites Automatically"
%.d: %.cpp
	set -e; rm -f $@; \
		$(CXX) -MM -I../caa/src $< > $(@F).$$$$; \
		sed 's,\($(*F)\)\.o[ :]*,\1.o $(@F) : ,g' < $(@F).$$$$ > $(@F); \
		rm -f $(@F).$$$$

include $(notdir $(C3PIMP:.cpp=.d)) P4ProjectorFactory.d PJ2TextureMapperC3p.d

ifdef winos
.cpp.o:
	$(CXX) $(CXXFLAGS) -Wall -shared \
	-I../caa/src \
	-c $< -o $@

.cxx.o:
	$(CXX) -Wall -shared \
	-I$(c3psrc) \
	-I"$(JAVA_HOME)/include" \
	-I"$(JAVA_HOME)/include/win32" \
	-c $< -o $@

$(C3PDLL): $(C3POBJ) $(c3psrc)/P4ProjectorFactory.o $(c3psrc)/PJ2TextureMapperC3p.o
	$(CXX) -Wall -shared \
	-static-libgcc -static-libstdc++ \
	-o $@ $^

# C3P test programs (c3p/%.exe)
$(c3psrc)/Coordinate: $(c3psrc)/Coordinate.o $(c3psrc)/Math.o
$(c3psrc)/Vector3D: $(c3psrc)/Vector3D.o
$(c3psrc)/Plane: $(c3psrc)/Plane.o $(c3psrc)/Vector3D.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o
$(c3psrc)/Math: $(c3psrc)/Math.o
$(c3psrc)/RealMatrix: $(c3psrc)/RealMatrix.o
$(c3psrc)/P4Mollweide: $(c3psrc)/P4Mollweide.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o $(c3psrc)/P4ProjectorFactory.o
$(c3psrc)/P4Orthographic: $(c3psrc)/P4Orthographic.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o $(c3psrc)/P4ProjectorFactory.o
$(c3psrc)/P4Stereographic: $(c3psrc)/P4Stereographic.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o $(c3psrc)/P4ProjectorFactory.o

$(C3PEXE):
	$(CXX) -static-libgcc -static-libstdc++ -o $@ $^

.cu.o:
	@:

# double precision DCP test programs (dcp/%.exe)
$(dcpsrc)/Coordinate: $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/Vector3D: $(dcpsrc)/Vector3D.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/Plane: $(dcpsrc)/Plane.o $(dcpsrc)/Vector3D.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/Math: $(dcpsrc)/Math.o
$(dcpsrc)/RealMatrix: $(dcpsrc)/RealMatrix.o
$(dcpsrc)/P4Mollweide: $(dcpsrc)/P4Mollweide.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/P4Orthographic: $(dcpsrc)/P4Orthographic.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/P4Stereographic: $(dcpsrc)/P4Stereographic.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o

# single precision DCP test programs (dcp/%.exe)
$(dcpsrc)/Coordinate_f: $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/Vector3D_f: $(dcpsrc)/Vector3D_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/Plane_f: $(dcpsrc)/Plane_f.o $(dcpsrc)/Vector3D_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/Math_f: $(dcpsrc)/Math_f.o
$(dcpsrc)/P4Mollweide_f: $(dcpsrc)/P4Mollweide_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/P4Orthographic_f: $(dcpsrc)/P4Orthographic_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/P4Stereographic_f: $(dcpsrc)/P4Stereographic_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o

$(DCPEXE) $(DCPEXE_F):
	@echo "rem *** exec Developer Command Prompt for VS2015 and run commands given below"
	@echo set JAVA_HOME=c:\program files\java\jdk1.8.0_151
	@echo set CUDA_HOME=%userprofile%\lab\cudacons\cuda_8.0.44_windows\compiler
	@echo cd %userprofile%\src\chartacaeli-app\org\chartacaeli\gpu
	@echo .\$(subst /,\,$@).cmd

PJ2TextureMapperGpu PJ2TextureMapperGpu.cubin: $(GPUOBJ)
	@echo "rem *** exec Developer Command Prompt for VS2015 and run commands given below"
	@echo set JAVA_HOME=c:\program files\java\jdk1.8.0_151
	@echo set CUDA_HOME=%userprofile%\lab\cudacons\cuda_8.0.44_windows\compiler
	@echo cd %userprofile%\src\chartacaeli-app\org\chartacaeli\gpu
	@echo .\$(basename $@).cmd

PJ2TextureMapperGpu_f PJ2TextureMapperGpu_f.cubin: $(GPUOBJ_F)
	@echo "rem *** exec Developer Command Prompt for VS2015 and run commands given below"
	@echo set JAVA_HOME=c:\program files\java\jdk1.8.0_151
	@echo set CUDA_HOME=%userprofile%\lab\cudacons\cuda_8.0.44_windows\compiler
	@echo cd %userprofile%\src\chartacaeli-app\org\chartacaeli\gpu
	@echo .\$(basename $@).cmd
else
.cpp.o:
	$(CXX) $(CXXFLAGS) -Wall -shared -fPIC \
	-I../caa/src \
	-I$(CUDA_HOME)/include \
	-I$(CUDA_HOME)/samples/common/inc \
	-c $< -o $@

.cxx.o:
	$(CXX) -Wall -shared -fPIC \
	-I$(c3psrc) \
	-I$(JAVA_HOME)/include \
	-I$(JAVA_HOME)/include/linux \
	-c $< -o $@

$(C3PDLL): $(C3POBJ) $(c3psrc)/P4ProjectorFactory.o $(c3psrc)/PJ2TextureMapperC3p.o
	$(CXX) -Wall -shared \
	-o $@ $^

# C3P test programs (c3p/%.exe)
$(c3psrc)/Coordinate: $(c3psrc)/Coordinate.o $(c3psrc)/Math.o
$(c3psrc)/Vector3D: $(c3psrc)/Vector3D.o
$(c3psrc)/Plane: $(c3psrc)/Plane.o $(c3psrc)/Vector3D.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o
$(c3psrc)/Math: $(c3psrc)/Math.o
$(c3psrc)/RealMatrix: $(c3psrc)/RealMatrix.o
$(c3psrc)/P4Mollweide: $(c3psrc)/P4Mollweide.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o $(c3psrc)/P4ProjectorFactory.o
$(c3psrc)/P4Orthographic: $(c3psrc)/P4Orthographic.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o $(c3psrc)/P4ProjectorFactory.o
$(c3psrc)/P4Stereographic: $(c3psrc)/P4Stereographic.o $(c3psrc)/Coordinate.o $(c3psrc)/Math.o $(c3psrc)/P4ProjectorFactory.o

$(C3PEXE):
	$(CXX) -o $@ $^

.cu.o:
	nvcc $(NVCCFLAGS) -std c++11 -Wno-deprecated-gpu-targets \
	--use_fast_math --maxrregcount 32 \
	-I$(CUDA_HOME)/include \
	-I$(CUDA_HOME)/samples/common/inc \
	-o $@ -dc $<

# double precision DCP test programs (dcp/%.exe)
$(dcpsrc)/Coordinate: $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/Vector3D: $(dcpsrc)/Vector3D.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/Plane: $(dcpsrc)/Plane.o $(dcpsrc)/Vector3D.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/Math: $(dcpsrc)/Math.o
$(dcpsrc)/RealMatrix: $(dcpsrc)/RealMatrix.o
$(dcpsrc)/P4Mollweide: $(dcpsrc)/P4Mollweide.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/P4Orthographic: $(dcpsrc)/P4Orthographic.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o
$(dcpsrc)/P4Stereographic: $(dcpsrc)/P4Stereographic.o $(dcpsrc)/Coordinate.o $(dcpsrc)/Math.o

# single precision DCP test programs (dcp/%.exe)
$(dcpsrc)/Coordinate_f: $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/Vector3D_f: $(dcpsrc)/Vector3D_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/Plane_f: $(dcpsrc)/Plane_f.o $(dcpsrc)/Vector3D_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/Math_f: $(dcpsrc)/Math_f.o
$(dcpsrc)/P4Mollweide_f: $(dcpsrc)/P4Mollweide_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/P4Orthographic_f: $(dcpsrc)/P4Orthographic_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o
$(dcpsrc)/P4Stereographic_f: $(dcpsrc)/P4Stereographic_f.o $(dcpsrc)/Coordinate_f.o $(dcpsrc)/Math_f.o

$(DCPEXE) $(DCPEXE_F):
	nvcc -Wno-deprecated-gpu-targets -o $@ $^

PJ2TextureMapperGpu PJ2TextureMapperGpu.cubin: $(GPUOBJ)
PJ2TextureMapperGpu_f PJ2TextureMapperGpu_f.cubin: $(GPUOBJ_F)

PJ2TextureMapperGpu PJ2TextureMapperGpu_f:
	nvcc $(NVCCFLAGS) -Wno-deprecated-gpu-targets \
	-arch=sm_30 -o $@ $^

PJ2TextureMapperGpu.cubin PJ2TextureMapperGpu_f.cubin:
	nvcc $(NVCCFLAGS) -Wno-deprecated-gpu-targets \
	--resource-usage -cubin -dlink \
	-arch=sm_30 -o $@ $^
endif

all: cuda

# compiler objects
clean: c3pclean dcpclean gpuclean
	rm -f $(subst .java,.class,$(C3PJNI)) $(c3ptst)/P4Projector.class $(c3ptst)/RandomDataset.class
	rm -f $(subst .java,.class,$(C3PTST))
c3pclean:
	rm -f $(C3POBJ) $(c3psrc)/P4ProjectorFactory.o $(c3psrc)/PJ2TextureMapperC3p.o
dcpclean:
	rm -f $(DCPOBJ) $(DCPOBJ_F)
gpuclean:
	rm -f $(GPUOBJ) $(GPUOBJ_F)
	rm -f PJ2TextureMapperGpu.o PJ2TextureMapperGpu_f.o

# local clean
lclean: clean
	rm -f $(C3PJXX) $(C3PJNI)
	rm -f $(C3PDLL)
	rm -f $(C3PEXE) $(DCPEXE) $(DCPEXE_F)
	rm -f PJ2TextureMapperGpu PJ2TextureMapperGpu_f
	rm -f PJ2TextureMapperGpu.cubin PJ2TextureMapperGpu_f.cubin

# real clean
rclean: lclean
	rm -f $(notdir $(C3PIMP:.cpp=.d)) P4ProjectorFactory.d PJ2TextureMapperC3p.d
	rm -f $(JAREXT)

tidy: rclean



junit4.jar:
	wget -q -O $@ http://search.maven.org/remotecontent?filepath=junit/junit/4.12/junit-4.12.jar
hamcrest.jar:
	wget -q -O $@ http://search.maven.org/remotecontent?filepath=org/hamcrest/hamcrest-core/1.3/hamcrest-core-1.3.jar
