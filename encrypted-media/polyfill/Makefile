awkprog = /<\/head>/	{ print "    <script src=/encrypted-media/polyfill/chrome-polyfill.js></script>";      \
                          print "    <script src=/encrypted-media/polyfill/firefox-polyfill.js></script>";
                          print "    <script src=/encrypted-media/polyfill/cast.js></script>";     \
                          print "    <script src=/encrypted-media/polyfill/clearkey-polyfill.js></script>"; }; \
						{ print $$0 }

all : $(patsubst ../%,%,$(wildcard ../*.html))

%.html : ../%.html
	@awk '$(awkprog)' $< > $@

