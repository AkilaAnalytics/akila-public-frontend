rsync -az -e "ssh -F $HOME/.ssh/config" build public scripts package.json server.js akila-prod:/ebs-data/akila-public/
rsync -az -e "ssh -F $HOME/.ssh/config" build  akila-prod:/ebs-data/akila-public/
#rsync -avz -e  "ssh -F $HOME/.ssh/config" build akila-prod:/ebs-data/akila-public/
#rsync -avz -e "ssh -F $HOME/.ssh/config" public akila-prod:/ebs-data/akila-public/
#rsync -avz -e "ssh -F $HOME/.ssh/config" scripts akila-prod:/ebs-data/akila-public/
#rsync -avz -e "ssh -F $HOME/.ssh/config" package.json akila-prod:/ebs-data/akila-public/


