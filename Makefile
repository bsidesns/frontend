.include <name.ini>

SERVICE != echo ${app_name}front
REGGAE_PATH := /usr/local/share/reggae

do_devel:
	@sudo cbsd jexec jname=${SERVICE} env OFFLINE=${offline} BACKEND_URL=${BACKEND_URL} /usr/src/bin/devel.sh

.include <${REGGAE_PATH}/mk/service.mk>
