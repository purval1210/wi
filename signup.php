<?php
// Validate and sanitize the form data
$fullname = trim($_POST['fullname']);
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$username = trim($_POST['username']);
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$jobRole = $_POST['job-role'];
$experience = intval($_POST['experience']);

// Validate the uploaded resume
if ($_FILES['resume']['error'] === UPLOAD_ERR_OK) {
  $resume = $_FILES['resume']['name'];
  $tempFile = $_FILES['resume']['tmp_name'];
  $targetDirectory = 'uploads/';
  $targetFile = $targetDirectory . $resume;

  // Move the uploaded resume to the specified directory
  move_uploaded_file($tempFile, $targetFile);
} else {
  die("Error: Failed to upload the resume.");
}

// Connect to your MySQL database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the SQL query to insert the data into the database
$stmt = $conn->prepare("INSERT INTO candidates (fullname, email, username, password, job_role, experience, resume)
                        VALUES (?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssis", $fullname, $email, $username, $password, $jobRole, $experience, $resume);

if ($stmt->execute()) {
  echo "Signup successful!";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
