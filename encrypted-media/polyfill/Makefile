awkprog = /<\/head>/	{ print "    <script src=/encrypted-media/polyfill/chrome-polyfill.js></script>"; }; \
						{ print $$0 }

all : $(patsubst ../%,%,$(wildcard ../*.html))

%.html : ../%.html
	@awk '$(awkprog)' $< > $@

