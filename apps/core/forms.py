from django import forms

class ContactForm(forms.Form):
    fra_epost = forms.CharField(required=True)
    navn = forms.CharField(required=True)
    beskjed = forms.CharField(widget=forms.Textarea, required=True)
