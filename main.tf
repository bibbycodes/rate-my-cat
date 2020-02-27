provider "aws" {
  profile = "default"
  region = "eu-west-2"
}

resource "aws_db_instance" "default" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "postgres"
  engine_version       = "9.6.3"
  instance_class       = "db.t2.micro"
  name                 = "cats"
  username             = "postgres"
  port                 = 5432
  password             = "cats-pass"
}

resource "aws_s3_bucket" "rate-my-cat" {
  bucket = "rate-my-cat-bucket"
}
resource "aws_s3_bucket_object" "app_file" {
  bucket = "${aws_s3_bucket.rate-my-cat.id}"
  key    = "app.zip"
  source = "app.zip"
}

resource "aws_instance" "rate-my-cat" {
  ami = "ami-0a590332f9f499197"
  instance_type = "t2.micro"
}

resource "aws_elastic_beanstalk_application" "rate-my-cat-eba" {
  name = "rate-my-cat"
  tags = {
    Name = "rate-my-cat"
  }
}

data "archive_file" "source" {
  type        = "zip"
  source_dir  = "./"
  output_path = "./app.zip"
}
