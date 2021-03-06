# Generated by Django 4.0.5 on 2022-06-30 12:31

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField(default=' ')),
                ('tag', models.CharField(choices=[('fl', 'flower'), ('bq', 'bouquet')], max_length=2)),
                ('primaryImg', models.ImageField(upload_to='')),
                ('img_1', models.ImageField(blank=True, null=True, upload_to='')),
                ('img_2', models.ImageField(blank=True, null=True, upload_to='')),
                ('img_3', models.ImageField(blank=True, null=True, upload_to='')),
                ('img_4', models.ImageField(blank=True, null=True, upload_to='')),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
            ],
        ),
    ]
