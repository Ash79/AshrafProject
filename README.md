<h1>This Project was created by APICZAR TOOL</h1>
        <h3>Prerequisites:</h3>
        <ul>
            <li>AWS CLI must be installed and configured with your AWS Keys</li>
            <li>The bucket with the specified name should exist on your S3 service. <strong>Note that its contents will be deleted before deployment</strong></li>
            <li>Gulp should be installed globally on your machine</li>
        </ul>
        <h3>Steps to deploy the project on AWS</h3>
        <ol>
            <li>Navigate to the revision needed to be deployed (cd api_name/revision_name)</li>
            <li>npm install</li>
            <li>sudo gulp aws-deploy</li>
        </ol>
        <h5>If everything went successfully, you should see the api deployed on API Gateway on AWS.</h5>
        