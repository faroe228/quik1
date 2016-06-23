# quik1

My temporary solution to use .jsx files with quik.

Instead of using quick command - use q (script is in $HOME/bin).

```
cd $HOME
mkdir exp
cd exp
mkdir node-custom
cd node-custom

curl -kOL https://raw.githubusercontent.com/faroe228/quik1/master/quik-v0.6.0_mod1.tar.gz
tar xf quik-v0.6.0_mod1.tar.gz
cd quik-v0.6.0
npm install

(echo '#!/usr/bin/env bash' > "$HOME/bin/q") & \
(echo 'node $HOME/exp/node-custom/quik-v0.6.0/bin/quik.js "$@"' >> "$HOME/bin/q") & \
(chmod +x "$HOME/bin/q")
```

