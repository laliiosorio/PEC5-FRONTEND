import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent {
  articleForm: FormGroup

  constructor (private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      name: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]
      ],
      imageUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(https?:\/\/[^\s]+(\.[^\s]+)+\.[a-z]{2,3}\/[^\s]+(\.[^\s]+)?)$/
          )
        ]
      ],
      isOnSale: [false]
    })
  }

  onSubmit () {
    if (this.articleForm.valid) {
      console.log('Formulario válido, datos:', this.articleForm.value)
      this.articleForm.reset()
    } else {
      this.markAllAsTouched()
      console.log('Formulario no válido')
    }
  }

  private markAllAsTouched () {
    Object.values(this.articleForm.controls).forEach(control => {
      control.markAsTouched()
    })
  }
}
