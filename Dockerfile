from caddy

copy --from=builder ./dist /srv
copy --from=draws ./pairs.json ./codes.json /srv/

expose 80
cmd [ "caddy", "file-server" ]
