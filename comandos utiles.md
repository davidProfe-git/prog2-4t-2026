# Para empezar
`git init` para inicializar el repositorio en local- crear repo

# Para configurar usuario local por repositorio
`git config --local user.name "suNombre"`  
`git config --local user.email "su@correo.com"`

# Para hacer un commit
`git status` ver el estado de mis archivos y cambios  
`git add .` agregar todos mis cambios pendientes  
`git commit -m "mensaje del commit"` hacer un commit - requiere que se de un add antes

# Vincular un repositorio remoto
`git remote add origin [url]` se debe pegar la url(link) del repositorio que se creo en github o gitlab etc.  
`git push origin main` se hace push para enviar los cambios (commits) locales y sincronizar con el repositorio

# Navegar entre carpetas
`ls -la` listar todo en una carpeta  
`cd <nombre_carpeta>` entrar en una carpeta  
`cd ..` salir de una carpeta  
