# Generated by Django 5.1.3 on 2024-11-10 17:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userrecord',
            old_name='firstname',
            new_name='first_name',
        ),
        migrations.RenameField(
            model_name='userrecord',
            old_name='lastname',
            new_name='last_name',
        ),
    ]
