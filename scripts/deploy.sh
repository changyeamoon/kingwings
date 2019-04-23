echo "Processing deploy.sh"
# Set EB BUCKET as env variable
EB_BUCKET=elasticbeanstalk-us-west-1-223635998369
# Set the default region for aws cli
aws configure set default.region us-west-1
# Log in to ECR
eval $(aws ecr get-login --no-include-email --region us-west-1)
# Build docker image based on our default Dockerfile
docker build -t kingwings/kings .
# tag the image with the Travis-CI SHA
docker tag kingwings/kings:latest 223635998369.dkr.ecr.us-west-1.amazonaws.com/kings:$TRAVIS_COMMIT
# Push built image to ECS
docker push 223635998369.dkr.ecr.us-west-1.amazonaws.com/kings:$TRAVIS_COMMIT
# Use the linux sed command to replace the text '<VERSION>' in our Dockerrun file with the Travis-CI SHA
sed -i='' "s/<VERSION>/$TRAVIS_COMMIT/" Dockerrun.aws.json
# Zip up our codebase, along with modified Dockerrun and our .ebextensions directory
zip -r kings-prod-deploy.zip Dockerrun.aws.json .ebextensions
# Upload zip file to s3 bucket
aws s3 cp kings-prod-deploy.zip s3://$EB_BUCKET/kings-prod-deploy.zip
# Create a new application version with new Dockerrun
aws elasticbeanstalk create-application-version --application-name kingwings --version-label $TRAVIS_COMMIT --source-bundle S3Bucket=$EB_BUCKET,S3Key=kings-prod-deploy.zip
# Update environment to use new version number
aws elasticbeanstalk update-environment --environment-name kingwings-prod --version-label $TRAVIS_COMMIT