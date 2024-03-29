<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatronsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patrons', function (Blueprint $table) {
            $table->id();
            $table->longText('avatar')->nullable();
            $table->string('name');
            $table->date('birthday');
            $table->string('cpf', 11)->unique()->index();
            $table->json('marital_status')->nullable();
            $table->string('occupation')->nullable();
            $table->string('company')->nullable();
            $table->json('emails')->nullable();
            $table->json('phones')->nullable();
            $table->text('google_drive_directory')->nullable();
            $table->json('secretaries')->nullable();
            $table->json('dependents')->nullable();
            $table->json('social_medias')->nullable();
            $table->json('addresses')->nullable();
            $table->string('pointed_by')->nullable();
            $table->longText('bio')->nullable();
            $table->integer('status')->default(1); // 1 => ativo; 0 => inativo
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patrons');
    }
}
