from django import forms
from django.core.exceptions import ValidationError

class RegisterForm(forms.Form):
    email = forms.EmailField(
        label='ایمیل',
        widget=forms.EmailInput(attrs={
            'class':'input-ui pr-2',
            "placeholder" : "ایمیل خود را وارد کنید"
        })
    )
    password = forms.CharField(
        label= "رمز عبور",
        widget=forms.PasswordInput(attrs={
            'class': 'input-ui pr-2',
            "placeholder" : "رمز عبور خود را وارد کنید"
        })
    )
    confirm_password = forms.CharField(
        label="تکرار رمز عبور",
        widget=forms.PasswordInput(attrs={
            'class': "input-ui pr-2",
            "placeholder" : "رمز را تکرار کنید"
        })
    )

    def clean_confirm_password(self):
        password = self.cleaned_data.get('password')
        confirm_password = self.cleaned_data.get('confirm_password')
        if password != confirm_password:
            raise ValidationError('رمز عبور و تکرار آن باهم تطابق ندارد')
        else:
            return confirm_password

    

class LoginForm(forms.Form):
    email = forms.EmailField(
        label="ایمیل خود را وارد کنید",
        widget=forms.EmailInput(attrs={
            'class':'input-ui pr-2',
            
        })
    )
    password = forms.CharField(
        label= "رمز عبور خود را وارد کنید",
        widget=forms.PasswordInput(attrs={
            'class': 'input-ui pr-2',
        
        })
    )