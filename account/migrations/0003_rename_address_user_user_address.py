# Generated by Django 5.0.3 on 2024-04-25 10:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_user_address'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='address',
            new_name='user_address',
        ),
    ]
