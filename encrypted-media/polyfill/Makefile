awkprog = /<\/head>/	{ print "    <script src=/encrypted-media/polyfill/chrome-polyfill.js></script>"; }; \
						{ print $$0 }

all : $(patsubst ../%,%,$(wildcard ../*.html))

%.html : ../%.html
#	@sed -e 's/<\/head>/  <script src=\/encrypted-media\/polyfill\/polyfill.js><\/script><\/head>/' $< > $@
	awk '$(awkprog)' $< > $@

