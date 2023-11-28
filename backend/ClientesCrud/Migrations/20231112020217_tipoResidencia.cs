using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClientesCrud.Migrations
{
    /// <inheritdoc />
    public partial class tipoResidencia : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TipoResidencia",
                table: "Endereco",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TipoResidencia",
                table: "Endereco");
        }
    }
}
